import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
 users!: any[];
    constructor() {}

    ngOnInit() {
      debugger;

      this.users = [
        {
          id: 1,
          title: 'Mr.',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          isDeleting: false
        },
        {
          id: 2,
          title: 'Mrs.',
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane@example.com',
          isDeleting: true // Simulating a user in the process of deletion
        },
        // Add more user objects as needed
      ];
        // this.userService.getAll()
        //     .pipe(first())
        //     .subscribe(users => this.users = users);
    }

  deleteUser(id: string) {
    // const user = this.users.find(x => x.id === id);
    // if (!user) return;
    // user.isDeleting = true;
    // this.userService.delete(id)
    //     .pipe(first())
    //     .subscribe(() => this.users = this.users.filter(x => x.id !== id));
}
}
