import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GitHubService {
  // private url = 'https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery';
  // private url = 'https://api.github.com/search/repositories?q=topic:ruby+topic:rails';
  // private url = 'https://api.github.com/search/repositories?q=frogger+language:assembly&sort=stars&order=desc';
  private baseUrl = 'https://api.github.com/search/';
  private url = 'https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc';
  private headers = new Headers({'Accept': 'application/vnd.github.mercy-preview+json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  get(theUrl?: string): Observable<any> {
    const url = theUrl ? theUrl : this.url;
    return this.http.get(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    const linkHeader = res.headers.get('link');
    const links = linkHeader ? linkHeader.split(',') : [];
    return {body, links} || {incomplete_results: false, items: [], total_count: 0, links};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
