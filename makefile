SHELL := /bin/bash
PROCESS_DIR = ./processes
RAW_DATA_DIR = ./data/raw-data
FORMATTED_DATA_DIR = ./data/formatted-data
CSV_DIR = .data/export-data

create-csv:
	@cd $(PROCESS_DIR) && node data-formatter.js