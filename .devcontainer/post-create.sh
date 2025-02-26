#!/bin/zsh
curl -fsSL https://deno.land/x/install/install.sh | sh -s -- -y

source ~/.zshrc
omz theme set simple
omz plugin enable vi-mode z