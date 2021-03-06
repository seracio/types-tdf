declare namespace Transfer {
    /**
    * CYCLIST
    */
    interface RawCyclist {
        country: string;
        name: string;
        team: string;
        id: string;
        dossard: string;
        edition: number;
    }

    interface Cyclist extends RawCyclist {
        birthday: Date;
    }

    interface NetworkCyclist extends RawCyclist {
        birthday: string;
    }

    /**
     * STEP
     */
    interface Ranking {
        rank: number;
        cyclistId: string;
        time: number;
        difference: number;
    }

    interface Point {
        label: string;
        latitude: number;
        longitude: number;
        altitude: number;
    }

    interface Step {
        distance: number;
        edition: number;
        num: number;
        id: string;
        rankings: Array<Ranking>;
        points: Array<Point>;
        uri: string;
        type: string;
    }

}

export = Transfer;
