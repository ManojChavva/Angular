import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <form (submit)="addPerson(name.value, id.value, employeeNumber.value)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required #name />
      <br />
      <label for="id">ID:</label>
      <input type="text" id="id" name="id" required #id />
      <br />
      <label for="employeeNumber">Employee Number:</label>
      <input
        type="text"
        id="employeeNumber"
        name="employeeNumber"
        required
        #employeeNumber
      />
      <br /><br />
      <button type="submit">Add Person</button>
    </form>

    <table>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Employee Number</th>
        <th>Actions</th>
      </tr>
      <tr *ngFor="let person of people; let i = index">
        <td>{{ person.name }}</td>
        <td>{{ person.id }}</td>
        <td>{{ person.employeeNumber }}</td>
        <td>
          <button (click)="editPerson(i)">Edit</button>
          <button (click)="deletePerson(i)">Delete</button>
        </td>
      </tr>
    </table>

    <form
      *ngIf="editingIndex !== null"
      (submit)="
        updatePerson(editingIndex, name.value, id.value, employeeNumber.value)
      "
    >
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        [(ngModel)]="people[editingIndex].name"
        #name
      />
      <br />
      <label for="id">ID:</label>
      <input
        type="text"
        id="id"
        name="id"
        required
        [(ngModel)]="people[editingIndex].id"
        #id
      />
      <br />
      <label for="employeeNumber">Employee Number:</label>
      <input
        type="text"
        id="employeeNumber"
        name="employeeNumber"
        required
        [(ngModel)]="people[editingIndex].employeeNumber"
        #employeeNumber
      />
      <br /><br />
      <button type="submit">Update Person</button>
    </form>
  `,
  styles: `
    table {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #4CAF50;
      color: white;
    }

    button {
      margin-right: 8px;
    }
  `
})
export class AppComponent {
  people = [];

  editingIndex: number | null = null;

  addPerson(name: string, id: string, employeeNumber: string) {
    this.people.push({ name, id, employeeNumber });
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }

  editPerson(index: number) {
    this.editingIndex = index;
  }

  updatePerson(
    index: number,
    name: string,
    id: string,
    employeeNumber: string
  ) {
    this.people[index] = { name, id, employeeNumber };
    this.editingIndex = null;
  }
}
