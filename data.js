var APP_DATA = {
  "scenes": [
    {
      "id": "0---",
      "name": "Вход в медцентр",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02278336020471272,
          "pitch": -0.0350674218915934,
          "rotation": 0,
          "target": "1---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1---",
      "name": "Первый этаж, холл",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6175248687209454,
        "pitch": -0.031684958539841546,
        "fov": 1.4750260155657544
      },
      "linkHotspots": [
        {
          "yaw": -1.92615615710762,
          "pitch": 0.11090479610198578,
          "rotation": 0,
          "target": "0---"
        },
        {
          "yaw": 0.8808949354641928,
          "pitch": 0.07588601696825847,
          "rotation": 0,
          "target": "2-------"
        },
        {
          "yaw": 0.07442755849455018,
          "pitch": 0.12513345493672645,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-------",
      "name": "Переход на второй этаж и в лифт",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.2424678881303528,
        "pitch": -0.055994615776928214,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04246318360063839,
          "pitch": 0.20242989848391346,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -1.4615267734305952,
          "pitch": 0.08195079894259472,
          "rotation": 0,
          "target": "1---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "Регистратура",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1659858655346067,
          "pitch": 0.1507273378503431,
          "rotation": 1.5707963267948966,
          "target": "4-----"
        },
        {
          "yaw": -1.7785773038591373,
          "pitch": 0.3156261906693203,
          "rotation": 0,
          "target": "1---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-----",
      "name": "Коридор, кабинеты на первом этаже",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.1142541337204346,
        "pitch": 0.05645236335474557,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2698465195401027,
          "pitch": 0.17298143683664335,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 2.9360105989874663,
          "pitch": 0.05581229621555295,
          "rotation": 4.71238898038469,
          "target": "5-----"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-----",
      "name": "Коридор, вход в процедурный кабинет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.7270856068332154,
        "pitch": -0.09475226387145241,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.075078274978855,
          "pitch": 0.11098256248466143,
          "rotation": 1.5707963267948966,
          "target": "4-----"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
