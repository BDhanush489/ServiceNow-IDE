import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "be66936c5ab44d148d8f80bda2334520"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "48a08c301a9a4d04ab80e263bfecbcb5"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "d5f8f194b1a34465add229702efa93db"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "d8344c0f2ae044fdacdff314aa2b6383"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "0298523ad32c44eea854e394a1085f22",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "ac38c929934b4137b8174300145e0f9e",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "5d14de18f7ac4efdb870384a8991a62f",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
