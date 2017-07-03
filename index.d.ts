declare namespace Transfer {
    /**
    * CYCLIST
    */
    interface RawCyclist {
        country: string;
        name: string;
        team: string;
        id: string;
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
        type: string;
    }

    interface RawStep {
        distance: number;
        edition: number;
        id: number;
        rankings: Array<Ranking>;
        points: Array<Point>;
        uri: string;
    }

    interface NetworkStep {
        date: string;
    }

    interface Step {
        date: Date;
    }
}

export = Transfer;
