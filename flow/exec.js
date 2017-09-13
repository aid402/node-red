[
    {
        "id": "4fe4e0bf.9d0a9",
        "type": "exec",
        "z": "a40520da.5295a",
        "command": "cat",
        "addpay": false,
        "append": "/sys/devices/virtual/thermal/thermal_zone1/temp ",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "cat thermal_zone1",
        "x": 230,
        "y": 220,
        "wires": [
            [
                "7148dca.703e924"
            ],
            [
                "7148dca.703e924"
            ],
            [
                "7148dca.703e924"
            ]
        ]
    },
    {
        "id": "b47409d2.84f628",
        "type": "inject",
        "z": "a40520da.5295a",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "4fe4e0bf.9d0a9",
                "1fab9bf.1bba364"
            ]
        ]
    },
    {
        "id": "7148dca.703e924",
        "type": "debug",
        "z": "a40520da.5295a",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 430,
        "y": 220,
        "wires": []
    },
    {
        "id": "1fab9bf.1bba364",
        "type": "exec",
        "z": "a40520da.5295a",
        "command": "cat",
        "addpay": false,
        "append": "/sys/devices/virtual/thermal/thermal_zone0/temp ",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "cat thermal_zone0",
        "x": 230,
        "y": 280,
        "wires": [
            [
                "914731aa.9d0e8"
            ],
            [
                "914731aa.9d0e8"
            ],
            [
                "914731aa.9d0e8"
            ]
        ]
    },
    {
        "id": "914731aa.9d0e8",
        "type": "debug",
        "z": "a40520da.5295a",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 430,
        "y": 280,
        "wires": []
    }
]
