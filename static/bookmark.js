export const bookmark = `
function go(){
	USAGE="How to use: go [-c -d -l] [bookmark]";
    if  [ ! -e ~/.mac_scripts/.go_bookmarks ] ; then
        mkdir ~/.mac_scripts/.go_bookmarks
    fi

    case $1 in
        # create bookmark
        -c) shift
            if [ ! -f ~/.mac_scripts/.go_bookmarks/$1 ] ; then
                echo "cd \`pwd\`" > ~/.mac_scripts/.go_bookmarks/"$1" ;
                echo $1' bookmark saved';
            else
                echo 'Looks like there is already a bookmark '$1'... weird.';
            fi
            ;;
        # delete bookmark
        -d) shift
            if [ -f ~/.mac_scripts/.go_bookmarks/$1 ] ; then 
                rm ~/.mac_scripts/.go_bookmarks/"$1" ;
                echo $1" deleted";
            else
                echo "Oops, forgot to specify the bookmark" ;
            fi    
            ;;
        # list bookmarks
        -l) shift
            ls -l ~/.mac_scripts/.go_bookmarks/ ;
            ;;
        # List usage
        -h) shift
            echo "$USAGE" ;
            ;;
        # Default, check if bookmark exists and then go there
        *) 
        if [ -f ~/.mac_scripts/.go_bookmarks/$1 ] ; then 
            source ~/.mac_scripts/.go_bookmarks/"$1"
        else
            echo "Mmm...looks like your bookmark has spontaneously combusted. What I mean to say is that your bookmark does not exist." ;
        fi
    esac
}
`;
