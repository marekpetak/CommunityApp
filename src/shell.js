import toastr from 'toastr';

export class Shell {
    constructor() {}

    configureRouter(config, router) {
        this.router = router;
        config.title = "Capital Area .NEt USer Group";
        config.addPipelineStep('authorize', NavToastStep);
        config.options.pushState = true;
        config.map([{
                route: ['', 'events'],
                viewPorts: {
                    mainContent: {
                        moduleId: 'events/events'
                    },
                    sideBar: {
                        moduleId: 'sideBar/sponsors'
                    }
                },
                name: 'Events',
                title: 'Events',
                nav: true
            },
            {
                route: 'jobs',
                viewPorts: {
                    mainContent: {
                        moduleId: 'jobs/jobs'
                    },
                    sideBar: {
                        moduleId: 'sideBar/sponsors'
                    }
                },
                title: 'Jobs',
                nav: true
            },
            {
                route: 'discussion',
                viewPorts: {
                    mainContent: {
                        moduleId: 'discussion/discussion'
                    },
                    sideBar: {
                        moduleId: 'sideBar/ads'
                    }
                },
                title: 'Discussion',
                nav: true
            },
            {
                route: 'eventDetail/:eventId',
                viewPorts: {
                    mainContent: {
                        moduleId: 'events/eventDetail'
                    },
                    sideBar: {
                        moduleId: 'sideBar/ads'
                    }
                },
                name: 'eventDetail'
            }
        ]);

    }
}

class LogNextStep {
	run(navigationInstruction, next) {
		return next().then(result => {
			// Next step and all downstream steps are complete
			console.log(JSON.stringify(result));
			return result;
		});
	}
}

class NavToastStep {
	run(navigationInstruction, next) {
		return next().then(result => {
			if (result.status === "canceled") 
				toastr.error("Navigation cancelled");
			if (result.status === "completed")
				toastr.info("Navigation complete");
			return result;
		});
	}
}