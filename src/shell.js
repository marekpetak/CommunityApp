export class Shell {
    constructor() {
        
    }

    configureRouter(config, router){
        this.router = router;
        config.title = "Capital Area .NEt USer Group";
        config.map([
            {route: '', moduleId: 'events'}
        ]);

    }
}