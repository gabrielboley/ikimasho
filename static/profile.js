export const profile = `
export PS1="C:\\DOOM>"

# Aliases
alias upgrade="yarn upgrade-interactive"
alias update="yarn upgrade-interactive"
alias b="npm run prepublishbuild"
alias ll="ls -lh"
alias la="ls -lha"
alias lint="yarn lint"
alias dev="yarn dev"
alias watch="yarn watch"
alias ide="open -a Webstorm ./"
alias ip='ipconfig getifaddr en0'
alias uw="cd /Users/gboley/Sites/root/Dev/uwm-2"
alias uwm="cd /Users/gboley/Sites/root/Dev/uwm-2"
alias prod="yarn build:production"
alias prune="git remote prune origin"
alias i="yarn install"
alias test="yarn test"
alias install="yarn install"
alias ticket="yarn ticket"

# Load Mac Scripts
if [ -f ~/.mac_scripts/.go ]; then
    source ~/.mac_scripts/.go
fi
`;
