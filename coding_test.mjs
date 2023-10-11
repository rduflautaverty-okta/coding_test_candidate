import okta from '@okta/okta-sdk-nodejs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Setup prompt to user
const jsInterface = readline.createInterface({ input, output });
const ask = async function(userInput) {return jsInterface.question(userInput)};

// Setup Your Okta Domain
// https://github.com/okta/okta-sdk-nodejs
// Requires Node.js version 12.0.0 or higher.
const client = new okta.Client({
  orgUrl: process.env.OKTADOMAIN,
  token: process.env.APITOKEN
});

// =========== Step 1 ================
// Get User Input through console interaction
// Get First Name of test users
// Get Last Name of test users

console.log('===================== Adding Users =====================');

let createOtherUser = true;
const names = [];

while (createOtherUser)
{
    try { 
        // add new user to array of names
        const fname = await ask("First Name: ");
        const lname = await ask("Last Name: ");
        names.push({fname, lname});

        const addAnother = await ask("Add another user (Y to continue)?");

        // case-insensitive string comparison
        if(!(addAnother.toUpperCase() === 'Y'))
            createOtherUser = false;
    }
    catch(error) {
        throw error; 
    }
}


// =========== Step 2 ================
// Create users based on earlier input
// Use firstname{index}.lastname@atko.email as username (For example, john1.doe@atko.email)

// =========== Step 3 ================
// Create a group, get group name through console input


// =========== Step 4 ================
// Add all users to the group

// =========== Step 5 (optional)================
// Prompt for users to be deleted, and remove them from tenant

console.log("=====================Activity Completed=====================");
jsInterface.close();
