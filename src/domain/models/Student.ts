
export class Student {
    public id: number;
    public name: string;
    public created_at: string;
    public sortable_name: string;
    public short_name: string;
    public sis_user_id: string;
    public integration_id: string;
    public login_id: string;

    constructor(
        id: number,
        name: string,
        created_at: string,
        sortable_name: string,
        short_name: string,
        sis_user_id: string,
        integration_id: string,
        login_id: string,
    ) {
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.sortable_name = sortable_name;
        this.short_name = short_name;
        this.sis_user_id = sis_user_id;
        this.integration_id = integration_id;
        this.login_id = login_id;

    }

}