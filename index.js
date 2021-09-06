$(document).ready(function () {
    $('body').terminal({
        whoami: function () {
            this.echo('Sriram Jayaraman');
        },
        help: function () {
            this.echo('List of available commands:\r\n'
                + 'whoami - display effective user id\r\n'
                + 'ls - list directory contents\r\n'
                + 'pwd - return directory name\r\n'
                + 'cat <filename> - print a file\r\n'
                + 'clear - clear the terminal screen');
        },
        dir: function () {
            this.echo('Invalid command. Does this look like a windows command prompt to you?\nType "help" for usable commands')
        },
        ls: function () {
            lsString = ""
            links.forEach((link, index) => {
                lsString += link.label + ((index !== links.length - 1) ? "\n" : "")
            })
            this.echo(lsString)
        },
        pwd: function () {
            this.echo("[[;#fff;]/home/jay/]");
        },
        cat: function (file) {
            let data = links.find(linkData => linkData.label === file)
            if (data) {
                this.echo(data.value)
            } else {
                this.echo("[[;red;]" + file + ": No such file");
                let recommendation = links.find(link => link.label.includes(file))
                if (recommendation) {
                    this.echo('Did you mean ' + recommendation.label + '?')
                }
            }
        }
    }, {
        greetings: `
        :::'##:::::'##:'########:'##::::::::'######:::'#######::'##::::'##:'########:::: 
        ::: ##:'##: ##: ##.....:: ##:::::::'##... ##:'##.... ##: ###::'###: ##.....::::: 
        ::: ##: ##: ##: ##::::::: ##::::::: ##:::..:: ##:::: ##: ####'####: ##:::::::::: 
        ::: ##: ##: ##: ######::: ##::::::: ##::::::: ##:::: ##: ## ### ##: ######:::::: 
        ::: ##: ##: ##: ##...:::: ##::::::: ##::::::: ##:::: ##: ##. #: ##: ##...::::::: 
        ::: ##: ##: ##: ##::::::: ##::::::: ##::: ##: ##:::: ##: ##:.:: ##: ##:::::::::: 
        :::. ###. ###:: ########: ########:. ######::. #######:: ##:::: ##: ########:::: 
        ::::...::...:::........::........:::......::::.......:::..:::::..::........::::: 
        ::::::::::::::::::::::::::::::'########::'#######::::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::... ##..::'##.... ##:::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::::: ##:::: ##:::: ##:::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::::: ##:::: ##:::: ##:::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::::: ##:::: ##:::: ##:::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::::: ##:::: ##:::: ##:::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::::::::::: ##::::. #######::::::::::::::::::::::::::::::::
        :::::::::::::::::::::::::::::::::..::::::.......:::::::::::::::::::::::::::::::::
        ::::::::::::::::::::::::'##::::'###::::'##:::'##:'####::'######::::::::::::::::: 
        :::::::::::::::::::::::: ##:::'## ##:::. ##:'##:: ####:'##... ##:::::::::::::::: 
        :::::::::::::::::::::::: ##::'##:. ##:::. ####:::. ##:: ##:::..::::::::::::::::: 
        :::::::::::::::::::::::: ##:'##:::. ##:::. ##::::'##:::. ######::::::::::::::::: 
        ::::::::::::::::::'##::: ##: #########:::: ##::::..:::::..... ##:::::::::::::::: 
        :::::::::::::::::: ##::: ##: ##.... ##:::: ##::::::::::'##::: ##:::::::::::::::: 
        ::::::::::::::::::. ######:: ##:::: ##:::: ##::::::::::. ######::::::::::::::::: 
        :::::::::::::::::::......:::..:::::..:::::..::::::::::::......::::::::::::::::::
        
Type "help" for more information`
        , onCommandNotFound: function (command, terminal) {
            this.echo("[[;red;]command not found: " + command);
            this.echo('Type "help" for more information')
        }
    });
});

const links = [
    {
        id: 'ln',
        label: 'linkedin.txt',
        value: 'https://www.linkedin.com/in/sriramj19/'
    },
    {
        id: 'gh',
        label: 'github.txt',
        value: 'https://github.com/ssupdoc/'
    },
    {
        id: 'sex',
        label: 'stackoverflow.txt',
        value: 'https://stackexchange.com/users/8943458/sriram-jayaraman'
    },
    {
        id: 'twt',
        label: 'twitter.txt',
        value: 'https://twitter.com/ssup_doc'
    },
    {
        id: 'fb',
        label: 'facebook.txt',
        value: 'https://www.facebook.com/ssupdoc'
    },
    {
        id: 'about',
        label: 'about.txt',
        value: `[[;#fff;]
Kia ora!
I am Sriram Jayaraman, you can call me Jay. I am an enthusiastic infosec professional,
with lots of love towards building and breaking stuff. I have particular interests in 
application security and vulnerability assessment. Having been a software developer for
a good couple of years, I have a good understanding of how web applications work, 
catering to my interests. That does not mean I shy away from other aspects of security.
I want to be a life-long learner and I am confident that cyber security has a plethora
of rabbit holes for me to dive into. Feel free to say hi via any of my socials. I love
discussing all things tech, all things security.

PS: If you ever need a player for a game of footy, I am ALWAYS keen.
`
    }
]