import { Themes } from '../../theme';
import { borderRadius, borderWidth, iconSizes, spacings } from '../../sizes';

export const themes: Themes = {
  "dark": {
    "text": {
      "colors": {
        "primary": "#ffffff",
        "primary_bb": "#000000",
        "primary_wb": "#000000",
        "primary_bw": "#ffffff",
        "secondary": "#e3e5e6",
        "disabled": "#a9aeb1"
      }
    },
    "static": {
      "background": {
        "background_0": {
          "background": "#000000",
          "text": "#fff"
        },
        "background_1": {
          "background": "#242b30",
          "text": "#fff"
        },
        "background_2": {
          "background": "#37424a",
          "text": "#fff"
        },
        "background_3": {
          "background": "#555e65",
          "text": "#fff"
        },
        "background_accent_0": {
          "background": "#37424a",
          "text": "#fff"
        },
        "background_accent_1": {
          "background": "#555e65",
          "text": "#fff"
        },
        "background_accent_2": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "background_accent_3": {
          "background": "#007c92",
          "text": "#fff"
        },
        "background_accent_4": {
          "background": "#e5e8b8",
          "text": "#000"
        },
        "background_accent_5": {
          "background": "#2b343a",
          "text": "#fff"
        }
      },
      "status": {
        "valid": {
          "background": "#909a00",
          "text": "#000"
        },
        "info": {
          "background": "#007c92",
          "text": "#fff"
        },
        "warning": {
          "background": "#e4d700",
          "text": "#000"
        },
        "error": {
          "background": "#b74166",
          "text": "#fff"
        },
        "success_secondary": {
          "background": "#464a00",
          "text": "#fff"
        },
        "info_secondary": {
          "background": "#003943",
          "text": "#fff"
        },
        "warning_secondary": {
          "background": "#1f2100",
          "text": "#fff"
        },
        "error_secondary": {
          "background": "#380616",
          "text": "#fff"
        }
      }
    },
    "interactive": {
      "interactive_0": {
        "default": {
          "background": "#007c92",
          "text": "#fff"
        },
        "hover": {
          "background": "#006678",
          "text": "#fff"
        },
        "active": {
          "background": "#a6d1d9",
          "text": "#000"
        },
        "disabled": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "outline": {
          "background": "#71d6e0",
          "text": "#000"
        },
        "destructive": {
          "background": "#d692a7",
          "text": "#000"
        }
      },
      "interactive_1": {
        "default": {
          "background": "#555e65",
          "text": "#fff"
        },
        "hover": {
          "background": "#6f777d",
          "text": "#000"
        },
        "active": {
          "background": "#1a2024",
          "text": "#fff"
        },
        "disabled": {
          "background": "#c7cacc",
          "text": "#000"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#d692a7",
          "text": "#000"
        }
      },
      "interactive_2": {
        "default": {
          "background": "#000000",
          "text": "#fff"
        },
        "hover": {
          "background": "#002329",
          "text": "#fff"
        },
        "active": {
          "background": "#004e5c",
          "text": "#fff"
        },
        "disabled": {
          "background": "#000000",
          "text": "#fff"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#d692a7",
          "text": "#000"
        }
      },
      "interactive_3": {
        "default": {
          "background": "#004e5c",
          "text": "#fff"
        },
        "hover": {
          "background": "#003943",
          "text": "#fff"
        },
        "active": {
          "background": "#003943",
          "text": "#fff"
        },
        "disabled": {
          "background": "#555e65",
          "text": "#fff"
        },
        "outline": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      },
      "interactive_destructive": {
        "default": {
          "background": "#a51140",
          "text": "#fff"
        },
        "hover": {
          "background": "#b74166",
          "text": "#fff"
        },
        "active": {
          "background": "#380616",
          "text": "#fff"
        },
        "disabled": {
          "background": "#eed2db",
          "text": "#000"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#d692a7",
          "text": "#000"
        }
      }
    },
    "transport": {
      "transport_city": {
        "primary": {
          "background": "#a2ad00",
          "text": "#000"
        },
        "secondary": {
          "background": "#909a00",
          "text": "#000"
        }
      },
      "transport_region": {
        "primary": {
          "background": "#007c92",
          "text": "#fff"
        },
        "secondary": {
          "background": "#006678",
          "text": "#fff"
        }
      },
      "transport_airport_express": {
        "primary": {
          "background": "#a51140",
          "text": "#fff"
        },
        "secondary": {
          "background": "#7d0d31",
          "text": "#fff"
        }
      },
      "transport_flexible": {
        "primary": {
          "background": "#c75b12",
          "text": "#000"
        },
        "secondary": {
          "background": "#97450e",
          "text": "#fff"
        }
      },
      "transport_boat": {
        "primary": {
          "background": "#71d6e0",
          "text": "#000"
        },
        "secondary": {
          "background": "#539ca4",
          "text": "#000"
        }
      },
      "transport_train": {
        "primary": {
          "background": "#4b2942",
          "text": "#fff"
        },
        "secondary": {
          "background": "#2c1827",
          "text": "#fff"
        }
      },
      "transport_scooter": {
        "primary": {
          "background": "#464a00",
          "text": "#fff"
        },
        "secondary": {
          "background": "#323600",
          "text": "#fff"
        }
      },
      "transport_car": {
        "primary": {
          "background": "#5b3c53",
          "text": "#fff"
        },
        "secondary": {
          "background": "#4b2942",
          "text": "#fff"
        }
      },
      "transport_bike": {
        "primary": {
          "background": "#7d0d31",
          "text": "#fff"
        },
        "secondary": {
          "background": "#5c0a24",
          "text": "#fff"
        }
      },
      "transport_other": {
        "primary": {
          "background": "#c7cacc",
          "text": "#000"
        },
        "secondary": {
          "background": "#8d9398",
          "text": "#000"
        }
      }
    },
    "spacings": spacings,
    "icon": {
      "size": iconSizes
    },
    "border": {
      "radius": borderRadius,
      "width": borderWidth,
      "primary": "#242b30",
      "secondary": "#ffffff",
      "focus": "#448086"
    }
  },
  "light": {
    "text": {
      "colors": {
        "primary": "#ffffff",
        "primary_bb": "#000000",
        "primary_wb": "#ffffff",
        "primary_bw": "#000000",
        "secondary": "#555e65",
        "disabled": "#a9aeb1"
      }
    },
    "static": {
      "background": {
        "background_0": {
          "background": "#ffffff",
          "text": "#000"
        },
        "background_1": {
          "background": "#f1f2f2",
          "text": "#000"
        },
        "background_2": {
          "background": "#e3e5e6",
          "text": "#000"
        },
        "background_3": {
          "background": "#d5d7d9",
          "text": "#000"
        },
        "background_accent_0": {
          "background": "#37424a",
          "text": "#fff"
        },
        "background_accent_1": {
          "background": "#555e65",
          "text": "#fff"
        },
        "background_accent_2": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "background_accent_3": {
          "background": "#007c92",
          "text": "#fff"
        },
        "background_accent_4": {
          "background": "#e5e8b8",
          "text": "#000"
        },
        "background_accent_5": {
          "background": "#a6d1d9",
          "text": "#000"
        }
      },
      "status": {
        "valid": {
          "background": "#909a00",
          "text": "#000"
        },
        "info": {
          "background": "#007c92",
          "text": "#fff"
        },
        "warning": {
          "background": "#e4d700",
          "text": "#000"
        },
        "error": {
          "background": "#b74166",
          "text": "#fff"
        },
        "success_secondary": {
          "background": "#e5e8b8",
          "text": "#000"
        },
        "info_secondary": {
          "background": "#def5f8",
          "text": "#000"
        },
        "warning_secondary": {
          "background": "#fbf9da",
          "text": "#000"
        },
        "error_secondary": {
          "background": "#f4e1e7",
          "text": "#000"
        }
      }
    },
    "interactive": {
      "interactive_0": {
        "default": {
          "background": "#007c92",
          "text": "#fff"
        },
        "hover": {
          "background": "#006678",
          "text": "#fff"
        },
        "active": {
          "background": "#a6d1d9",
          "text": "#000"
        },
        "disabled": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "outline": {
          "background": "#71d6e0",
          "text": "#000"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      },
      "interactive_1": {
        "default": {
          "background": "#555e65",
          "text": "#fff"
        },
        "hover": {
          "background": "#6f777d",
          "text": "#000"
        },
        "active": {
          "background": "#1a2024",
          "text": "#fff"
        },
        "disabled": {
          "background": "#c7cacc",
          "text": "#000"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      },
      "interactive_2": {
        "default": {
          "background": "#ffffff",
          "text": "#000"
        },
        "hover": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "active": {
          "background": "#a6d1d9",
          "text": "#000"
        },
        "disabled": {
          "background": "#ffffff",
          "text": "#000"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      },
      "interactive_3": {
        "default": {
          "background": "#d4e9ec",
          "text": "#000"
        },
        "hover": {
          "background": "#a6d1d9",
          "text": "#000"
        },
        "active": {
          "background": "#a6d1d9",
          "text": "#000"
        },
        "disabled": {
          "background": "#e3e5e6",
          "text": "#000"
        },
        "outline": {
          "background": "#004e5c",
          "text": "#fff"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      },
      "interactive_destructive": {
        "default": {
          "background": "#a51140",
          "text": "#fff"
        },
        "hover": {
          "background": "#b74166",
          "text": "#fff"
        },
        "active": {
          "background": "#380616",
          "text": "#fff"
        },
        "disabled": {
          "background": "#eed2db",
          "text": "#000"
        },
        "outline": {
          "background": "#007c92",
          "text": "#fff"
        },
        "destructive": {
          "background": "#a51140",
          "text": "#fff"
        }
      }
    },
    "transport": {
      "transport_city": {
        "primary": {
          "background": "#a2ad00",
          "text": "#000"
        },
        "secondary": {
          "background": "#909a00",
          "text": "#000"
        }
      },
      "transport_region": {
        "primary": {
          "background": "#007c92",
          "text": "#fff"
        },
        "secondary": {
          "background": "#006678",
          "text": "#fff"
        }
      },
      "transport_airport_express": {
        "primary": {
          "background": "#a51140",
          "text": "#fff"
        },
        "secondary": {
          "background": "#7d0d31",
          "text": "#fff"
        }
      },
      "transport_flexible": {
        "primary": {
          "background": "#c75b12",
          "text": "#000"
        },
        "secondary": {
          "background": "#97450e",
          "text": "#fff"
        }
      },
      "transport_boat": {
        "primary": {
          "background": "#71d6e0",
          "text": "#000"
        },
        "secondary": {
          "background": "#539ca4",
          "text": "#000"
        }
      },
      "transport_train": {
        "primary": {
          "background": "#4b2942",
          "text": "#fff"
        },
        "secondary": {
          "background": "#2c1827",
          "text": "#fff"
        }
      },
      "transport_scooter": {
        "primary": {
          "background": "#464a00",
          "text": "#fff"
        },
        "secondary": {
          "background": "#323600",
          "text": "#fff"
        }
      },
      "transport_car": {
        "primary": {
          "background": "#5b3c53",
          "text": "#fff"
        },
        "secondary": {
          "background": "#4b2942",
          "text": "#fff"
        }
      },
      "transport_bike": {
        "primary": {
          "background": "#7d0d31",
          "text": "#fff"
        },
        "secondary": {
          "background": "#5c0a24",
          "text": "#fff"
        }
      },
      "transport_other": {
        "primary": {
          "background": "#37424a",
          "text": "#fff"
        },
        "secondary": {
          "background": "#2b343a",
          "text": "#fff"
        }
      }
    },
    "spacings": spacings,
    "icon": {
      "size": iconSizes
    },
    "border": {
      "radius": borderRadius,
      "width": borderWidth,
      "primary": "#f1f2f2",
      "secondary": "#000000",
      "focus": "#007c92"
    }
  }
};