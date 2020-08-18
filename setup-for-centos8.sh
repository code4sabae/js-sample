#!/bin/sh

curl -fsSL https://deno.land/x/install/install.sh | sh
cat >> .bash_profile << EOF
export DENO_INSTALL=/root/.deno
export PATH=/root/.deno/bin:$PATH
EOF
source .bash_profile

mkdir test
cd test
cat > main.js << EOF
import { Server } from "https://code4sabae.github.io/js/Server.js";
new Server(8881);
EOF
mkdir static
cat > static/index.html << EOF
Hi Deno!
EOF

firewall-cmd --permanent --add-port=8881/tcp
firewall-cmd --reload

nohup deno run -A main.js &
