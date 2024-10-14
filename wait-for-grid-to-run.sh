timeout 80 bash -c 'while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:4444/status)" != "200" ]]; do echo "Waiting until Grid wakes up" & sleep 5; done' || false
