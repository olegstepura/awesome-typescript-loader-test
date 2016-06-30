#!/bin/bash

echo "Killing all previously lauched Node.js instances"
AMOUNT=$(taskkill /f /im node.exe 2>/dev/null | grep node.exe | wc -l)
echo "Killed instances: $AMOUNT"

sleep 20