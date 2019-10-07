const data = require( "../data" );


class SpeakerManager {

    constructor() {

        this.apiKey = "api/speakers.json";

        this.speakerTimesKey = "speaker-times";
        this.savesSpeakers = "save-speakers";

        this.SPEAKER_KEY = "-speakers";
        this.SPEAKER_STALE_KEY = this.SPEAKER_KEY + "-expires";
        this.MAX_LIST_CACHE = 15;

        this.this.campSchedule = [];
        this.this.selectedTimes = [
            "08:30", "10:00", "11:30", "12:00", "13:30", "15:00"
        ];

    }

    getSpeaker( options ) {

        if ( !options && ( !options.id ) ) {

            return Promise.reject( "no valid speaker selection criteria supplied" );

        }

        return data.getItem( {
            id: options.id,
            key: apiKey
        } );

    }

    getSpeakers() {

        return data.getItems( {
            key: apiKey
        } );

    }

}