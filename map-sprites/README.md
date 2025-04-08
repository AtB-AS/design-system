## 🧾 Instructions

1. **Make sure that the assets in `sprite_assets` are correct.**  
   It is essential that the file names are correct.  
   For each folder (= OMS partner), there should be two folders – `light` and `dark`. Then follow the same patterns as used in the app.

2. **Generate sprites**
   ```sh
   bash generate_sprites.sh
   ```
   Then the updated sprites should be available inside the `generated_sprites` folder.  
   Also don't delete the `martin.yaml` while generating –  
   **Todo**: It should be possible to just use command args instead of a temporary config file.
