curl -fsSL https://deno.land/x/install/install.sh | sh
cat > .bash_profile << EOF
export DENO_INSTALL="/root/.deno"
export PATH="/root/.deno/bin:$PATH"
EOF
mkdir test
source .bash_profile
cat > main.js << EOF
import { Server } from "https://code4sabae.github.io/js/Server.js";
new Server(8881);
EOF
mkdir static
cat > static/index.html << EOF
Hi Deno!
EOF
cd ..
nohup deno run -A main.js &
