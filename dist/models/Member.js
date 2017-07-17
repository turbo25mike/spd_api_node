class Member extends Model {
    Map(auth) {
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
