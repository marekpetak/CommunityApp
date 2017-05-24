export class Shell {
    constructor() {

    }

    configureRouter(config, router) {
        this.router = router;
        config.title = "Capital Area .NEt USer Group";
        config.map([{
            route: ['', 'events'],
            moduleId: 'events/events',
            name: 'Events',
            title: 'Events',
            nav: true
        },
        {
            route: 'jobs',
            moduleId: 'jobs/jobs',
            name: 'Jobs',
            title: 'Jobs',
            nav: true
        },{
            route: 'discussion',
            moduleId: 'discussion/discussion',
            name: 'Discussion',
            title: 'Discussion',
            nav: true
        }]);

    }
}