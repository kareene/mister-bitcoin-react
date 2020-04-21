import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ContactDetailsPage extends Component {
    componentDidUpdate(prevProps, prevState) {
        // for handling changes without componentDidMount
    }
    render() {
        return (
            <section className="ContactDetailsPage">
                ContactDetailsPage
                <nav>
                    <Link to="/contact"></Link>
                    {/* <Link to={"/contact/edit/" + contact._id}></Link> */}
                </nav>
            </section>
        )
    }
}

export default ContactDetailsPage;

/*<section class="contact-details-page" *ngIf="currContact">
    <nav>
        <a routerLink="/contact" title="Back">
            <img src="assets/img/back-arrow.svg" />
        </a>
        <a [routerLink]="['/', 'contact', 'edit', currContact._id]" title="Edit">
            <img src="assets/img/edit.svg" />
        </a>
    </nav>
    <article class="contact-info">
        <img [src]="'https://robohash.org/' + currContact.name">
        <p>Name: {{currContact.name}}</p>
        <p>Phone: {{currContact.phone}}</p>
        <p>Email: {{currContact.email}}</p>
    </article>
    <transfer-fund [contact]="currContact"></transfer-fund>
    <moves-list [moves]="moves$ | async" [toContact]="currContact.name"></moves-list>
</section>*/