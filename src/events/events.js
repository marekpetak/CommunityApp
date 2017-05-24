import { DataRepository} from 'services/dataRepository';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(DataRepository, Router)
export class Events {
    constructor(dataRepository, router) {
        this.dataRepository = dataRepository;
        this.router = router;
    }

    goToDiscussion() {
        this.router.navigate('#/discussion');
    }

    activate(params) {
        this.dataRepository.getEvents().then(allEvents => { 
            if(params.speaker || params.topic){
                var filteredResults = [];
				allEvents.forEach(item=> {
					if (params.speaker && item.speaker.toLowerCase().indexOf(params.speaker.toLowerCase()) >= 0) {
						filteredResults.push(item);
					}
					if (params.topic && item.title.toLowerCase().indexOf(params.topic.toLowerCase()) >= 0) {
						filteredResults.push(item);
					}
				});
				this.events = filteredResults;
            }
            else {
                this.events = allEvents;
            }

            this.events.forEach(item => 
                item.detailUrl = this.router.generate('eventDetail', {eventId: item.id})
            );
        });
    }
}