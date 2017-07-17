class Member extends Model
{
    MemberID:number;
    LoginID:string;
    Nickname:string;
    Picture:string;
    Email:string;
    EmailVerified:boolean;
    GivenName:string;
    FamilyName:string;
    Name:string;

    Map(auth:Auth0User)
    {
        this.Nickname = auth.nickname;
        this.Picture = auth.picture;
        this.Email = auth.email;
        this.EmailVerified = auth.email_verified;
        this.GivenName = auth.given_name;
        this.FamilyName = auth.family_name;
        this.Name = auth.name;
        this.LoginID = auth.user_id;
    }
}
