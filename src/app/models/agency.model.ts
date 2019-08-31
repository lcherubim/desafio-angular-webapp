export class Agency {
    name: string;
    place_id: string;
}

export class AgencyDetail {
    name: string;
    formatted_phone_number: string;
    opening_hours: {
        weekday_text: Array<string>
    };
}
