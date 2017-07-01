declare namespace Transfer {

    /**
     * CYCLIST
     */
    interface RawCyclist {
        country: Array<string>
        name: string
        id: string
        height: number
        weight: number
    }

    interface Cyclist extends RawCyclist {
        birthday: Date
    }

    interface NetworkCyclist extends RawCyclist {
        birthday: string
    }

    /**
     * STEP
     */
    interface Ranking {
        rank: number;
        cyclistId: string;
        team: string;
        time: number;
        difference: number;
    }

    interface Point {
        label: string
        latitude: number
        longitude: number
        altitude: number
        type: string
    }

    interface RawStep {
        distance: number
        edition: number
        id: number
        rankings: Array<Ranking>
        points: Array<Point>
    }
}

export = Transfer;