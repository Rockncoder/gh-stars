import {TestBed, inject} from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import {GitHubService} from './git-hub.service';

describe('Service: GitHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GitHubService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should exist', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));
});
