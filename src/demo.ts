import dotenv from 'dotenv';

import { List } from './List';
import { Subscriber } from './Subscriber';
import { Template } from './Template';
import { Campaign } from './Campaign';

// Load environment variables from .env file (mostly Listmonki API credentials)
dotenv.config();

async function main() {
    // Create a new list
    await (await List.create('API Generated List', 'private', 'single')).save();
    
    // Get a list by it's name
    const list = await List.find((list: List) => list.getName() === 'API Generated List');
    if(typeof list === 'undefined') {
        throw new Error('List not found');
    }

    // Create a subscriber
    await (await Subscriber.create('api@nodejs.listmonk', 'Listmonk Node Client Library', 'enabled', [/*list*/], { phone: '+12345678912' })).save();

    // Get a subscriber by their email
    const subscriber = await Subscriber.find((subscriber: Subscriber) => subscriber.getEmail() === 'api@nodejs.listmonk');
    if(typeof subscriber === 'undefined') {
        throw new Error('Subscriber not found');
    }

    // Add the subscriber to the list
    subscriber.addList(list);
    await subscriber.save();

    // Create a template
    await (await Template.create('API Generated Template', 'campaign', 'Hello {{ .Subscriber.FirstName }},<br>{{ template "content" . }}<br>Your Phone number on record is: {{ .Subscriber.Attribs.phone }}')).save();

    // Get a template by it's name
    const template = await Template.find((template: Template) => template.getName() === 'API Generated Template');
    if(typeof template === 'undefined') {
        throw new Error('Template not found');
    }

    // Create a campaign
    const campaign = (await Campaign.create('API Generated Campaign', 'API Generated Campaign Subject', [list], 'regular', 'html',  '<h1>API Generated Text</h1><br><p>A demo campaign generated using the Listmonk Node Client Library</p>'));
    
    // Set the template for the campaign
    campaign.setTemplate(template);

    // Save the campaign to Listmonk
    await campaign.save();
}

main();