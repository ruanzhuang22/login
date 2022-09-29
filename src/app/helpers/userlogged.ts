
export class UserLogged {
  private readonly TOKENKEY: string = "Token";
  private readonly UserNameKey: string = "UserName";
  private readonly userIdKey: string = "userId";
  constructor() {
    this.TOKENKEY = "Token";
    this.userIdKey = "UserId";
    this.UserNameKey = "UserName";
  }
  getToken(): string {
    return this.getCookie(this.TOKENKEY);
  }
  getCurrentUser(): any {
    let userName = this.getCookie(this.UserNameKey);
    let userId = this.getCookie(this.userIdKey);
    return {
      userName: userName,
      userId: userId,
    };
  }
  setCurrentUser(token: string, userName: string, userId: string): void {
    this.setCookie(this.TOKENKEY, token);
    this.setCookie(this.UserNameKey, userName);
    this.setCookie(this.userIdKey, userId);
  }
  isLogged(): boolean {
    let token = this.getCookie(this.TOKENKEY);
    if(token === "" || token === null)
      return false;
    else
      return true;
  }
  logout(): void {
    this.deleteCookie(this.TOKENKEY);
    this.deleteCookie(this.UserNameKey);
    this.deleteCookie(this.userIdKey);
  }
  private deleteCookie(key): void {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  private setCookie(key: string, value: string): void {
    document.cookie = key + "=" + value + ";path=/";
  }
  private getCookie(cname) : string {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
