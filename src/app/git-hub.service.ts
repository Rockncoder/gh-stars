import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// https://developer.github.com/v3/search/

@Injectable()
export class GitHubService {
  private headers = new Headers({'Accept': 'application/vnd.github.mercy-preview+json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  // note: An observable is return from this method
  get(theUrl?: string, language?: any, topic: string = ''): Observable<any> {
    const lng = (language && language.language) ? `+language:${language.language}` : '';
    const tp = (topic) ? `+topic:${topic}` : '';
    const url = theUrl ? theUrl : `https://api.github.com/search/repositories?q=stars:>1${lng}${tp}&sort=stars&order=desc`;
    console.log(`topic = ${tp}, language = ${lng}`);

    if (language && theUrl) {
      console.log(`language = ${language.language}`);
    }

    return this.http.get(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    // let's get the link from the header
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
