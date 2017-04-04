import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../git-hub.service';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  errorMessage = '';
  items = [];
  nextUrl = null;
  previousUrl = null;
  total = 0;

  constructor(private gitHub: GitHubService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.callService(null);
  }

  nextPage() {
    console.log(`nextPage(): ${this.nextUrl}`);
    this.callService(this.nextUrl);
  }

  previousPage() {
    console.log(`previousPage(): ${this.previousUrl}`);
    this.callService(this.previousUrl);
  }

  private callService(url: string) {
    this.gitHub.get(url).subscribe(
      data => {
        this.items = data.body.items;
        this.total = data.body.   total_count;
        // console.log(`total-count = ${data.total_count}, incomplete = ${data.incomplete_results}`);
        data.links.forEach(link => {
          const [urlLink, urlType] = link.replace('<', '').replace('>', '').replace(' ', '').split(';');

          if (urlType.indexOf('next') > -1) {
            this.nextUrl = urlLink;
          } else if (urlType.indexOf('prev') > -1) {
            this.previousUrl = urlLink;
          }
          console.log(`next: ${urlType} link: ${urlLink}`);
        });
        // data.body.items.map(item => {
        //   console.log(`${item.full_name}, ${item.stargazers_count}`);
        // });
      },
      error => {
        this.errorMessage = <any>error;
      });
  }
}
