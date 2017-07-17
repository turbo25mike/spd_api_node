class Work extends Model
{
    OrgName:string;
    WorkID:number;
    ParentWorkID:number;
    OrgID:number;
    Title:string;
    Description:string;
    OwnerID:number;
    Status:string;
    Size:number;
    Priority:number;
    HoursWorked:number;
    IsPublic:boolean;
    DueDate:number;
    CompleteDate:Date;

    Children:Array<Work>;
    Tags:Array<WorkTag>;
}
