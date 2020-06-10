export class Article {
    title: string;
    content?: String;
    link: string;
    votes: number;


    constructor(title: string, content: string, link: string, votes: number) {
        this.title = title;
        this.content = content;
        this.link = link;
        this.votes = votes || 0;
    }


    // function ~
    voteUp() : void {
        this.votes += 1; 
    }  

    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

}   
