#!/bin/bash

set -e  # Exit on error


# Config
BASE_URL="http://localhost:3000/sprite"
OUT_BASE="./generated_sprites"

# Add new OMS partners here
NAMESPACES=()
for dir in sprite_assets/*/; do
  [ -d "$dir" ] && NAMESPACES+=("$(basename "$dir")")
done


THEMES=("light" "dark")
RESOLUTIONS=("" "@2x")

# 0. Generate martin.yaml dynamically
echo "📝 Generating martin.yaml..."

cat > martin.yaml <<EOL
sprites:
  sources:
EOL

for NAME in "${NAMESPACES[@]}"; do
  for THEME in "${THEMES[@]}"; do
    echo "    ${NAME}_${THEME}: /sprite_assets/${NAME}/${THEME}" >> martin.yaml
  done
done


# 1. Stop & remove existing container
echo "🔄 Stopping and removing any existing 'martin' container..."
docker stop martin >/dev/null 2>&1 || true
docker rm martin >/dev/null 2>&1 || true

# 2. Build dynamic volume args
echo "📦 Building volume mounts..."
VOLUME_ARGS="-v $(pwd)/martin.yaml:/config/martin.yaml"
for NAME in "${NAMESPACES[@]}"; do
  for THEME in "${THEMES[@]}"; do
    SRC_DIR="$(pwd)/sprite_assets/${NAME}/${THEME}"
    TARGET_DIR="/${NAME}/${THEME}"
    VOLUME_ARGS+=" -v ${SRC_DIR}:${TARGET_DIR}"
  done
done

# 3. Run martin container
echo "🚀 Starting 'martin' container..."
# Build docker run command as an array
DOCKER_CMD=(
  docker run -d
  --name martin
  --restart unless-stopped
  -p 3000:3000
)

# Append volume args
for NAME in "${NAMESPACES[@]}"; do
  for THEME in "${THEMES[@]}"; do
    SRC_DIR="$(pwd)/sprite_assets/${NAME}/${THEME}"
    TARGET_DIR="/sprite_assets/${NAME}/${THEME}"
    DOCKER_CMD+=(-v "${SRC_DIR}:${TARGET_DIR}")
  done
done

# Add config volume and final arguments
DOCKER_CMD+=(
  -v "$(pwd)/martin.yaml:/config/martin.yaml"
  ghcr.io/maplibre/martin:v0.13.0
  -c /config/martin.yaml
)

# echo "DOCKER_CMD: ${DOCKER_CMD[@]}"

# Run the container
echo "🚀 Starting 'martin' container..."
"${DOCKER_CMD[@]}"

# 4. Wait for it to boot up
echo "⏳ Waiting for martin to initialize..."
sleep 2  # Optional: replace with curl check later

# 5. Download sprites
echo "⬇️ Downloading sprite images..."
for NAME in "${NAMESPACES[@]}"; do
  OUT_DIR="${OUT_BASE}/${NAME}"
  mkdir -p "$OUT_DIR"

  for THEME in "${THEMES[@]}"; do
    for RES in "${RESOLUTIONS[@]}"; do
      for EXT in "png" "json"; do
        FILENAME="${THEME}${RES}.${EXT}"
        URL="${BASE_URL}/${NAME}_${FILENAME}"
        OUTPUT="${OUT_DIR}/${FILENAME}"

        echo "  ➤ Downloading ${URL}"
        curl -sf -o "${OUTPUT}" "${URL}" || echo "⚠️  Failed to download: ${URL}"
      done
    done
  done

done

echo "✅ All sprites downloaded into $OUT_BASE/"

echo "✅ Deleting temprorary martin.yaml file..."
rm -f martin.yaml

echo "🛑 Stopping and removing 'martin' container..."
docker stop martin >/dev/null
docker rm martin >/dev/null
echo "✅ Tile server shut down."
