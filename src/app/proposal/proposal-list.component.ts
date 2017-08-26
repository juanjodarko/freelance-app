import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://www.google.com', 'Ruby on Rails', 150, 128, 15, 'goo@gle.com')
  proposalTwo: Proposal = new Proposal(150, 'Abc Corp', 'http://www.google.com', 'Ruby on Rails', 150, 128, 15, 'goo@gle.com')
  proposalThree: Proposal = new Proposal(100, 'XYZ Company', 'http://www.google.com', 'Ruby on Rails', 150, 128, 15, 'goo@gle.com')
  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}