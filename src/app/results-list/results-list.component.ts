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

  constructor(private gitHub: GitHubService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.gitHub.get().subscribe(
      data => {
        this.items = data.body.items;
        console.log(`total-count = ${data.total_count}, incomplete = ${data.incomplete_results}`);
        data.links.forEach(link => {
          console.log(`next: ${link}`);
        });
        data.body.items.map(item => {
          console.log(`${item.full_name}, ${item.stargazers_count}`);
        });
      },
      error => {
        this.errorMessage = <any>error;
      });
  }
}
