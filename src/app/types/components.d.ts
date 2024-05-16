type buttonsProps = {
    pathname: string;
    item: itemProps;
    stroke: boolean;
}

type itemProps = {
    title: string;
    icon: JSX.Element;
    link: string;
    MainIcon: JSX.Element | null;
    sideNav: boolean;
}

type themeProps = {
    name: string;
    colors: {
        "--bg-color": string;
        "--bg-nav": string;
        "--active-component-line": string;
        "--active-component-bg": string;
        "--sidebar-bg": string;
        "--bg-main": string;
    };
    link: string;
}

type projectsProps = {
    name : string;
    id : number;
    description : string;
    homepage : string; 
    owner : {
        avatar_url : string;
    };
    html_url : string;
    language : string;
};

type projectProps = {
    id : number;
    name : string;
    description : string;
    homepage : string;
    avatar_url : string;
    language : string ;
    url : string;
};