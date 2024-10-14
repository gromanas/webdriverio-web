timeout 80 bash -c 'while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:4444/ping)" != "200" ]]; do echo "Waiting until Selenoid wakes up" & sleep 5; done' || false
