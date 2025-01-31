# RA PROGRAMMING CHALLENGE

Thank you very much for your interest in our open web developer position. In
order to evaluate your programming skills, we would like you to write a small
web application.

Your solution will be evaluated based on its clarity, effectiveness,
completeness, and style.

Please complete the problem and create a "stackblitz" Angular project of your solution
within 48 hours of your requested start time. To create a stackblitz, go to
https://stackblitz.com/edit/stackblitz-starters-ftw7sn9j and fork the project.

PLEASE MAKE SURE YOU CREATE A FORK OF THE PROJECT. DO NOT EDIT THE EXISTING PROJECT.

Once complete, please share the link to your project with us.

If you have any questions or concerns please contact us
via e-mail at websupport@rolledalloys.com.

# Scenario

We are in the early stages of developing a front-end web order entry system for
a new manufacturing firm headquartered in Toledo, OH: Pan-Universal Arms.
This application will communicate with a back-end ERP system using JSON based
web services provided by a middle tier gateway.

Our design dictates that this shall be a browser-only web application; the only
server-side interactions allowed are the web service calls to the ERP back-end.

You've been selected to design and implement a prototype of this application.
This prototype will be used to test the middle tier components as they are being
built, but it will also be used as a reference by our team for future web apps,
so be sure to make it a good example, especially for our less experienced devs.

The project deliverable is a simple item configuration interface whereby the item
catalog is presented to the user in a way that allows them to choose the type of
item for which they are searching (e.g. Blasters or Laser Sabers).

Upon item selection, the relevant configuration options for the item should be
presented for selection, along with a text input field representing the order
quantity. When all required fields are completed the price of the
selection(s) should be displayed and an 'Order Now' action presented. Clicking the
button can just display an alert that shows what was ordered.

You may assume the services to retrieve the item catalog have been mocked out as
a REST API. There are 2 endpoints, one that supplies a list of Blasters and one
that supplies a list of Laser Sabers.

The sample data from this API has been provided as variables within the stackblitz.

The data is also provided here, for reference:

```json
{
    "Blasters": [
        {
            "name":"GR-4 ST Blaster",
            "price":"400",
            "beam":"green"
        },
        {
            "name":"GR-9 Plasma Blaster",
            "price":"740",
            "beam":"orange"
        },
        {
            "name":"TM-59 Blaster Pistol",
            "price":"920",
            "beam":"blue"
        },
        {
            "name":"WL-29 Blaster",
            "price":"785",
            "beam":"purple"
        }
    ]
}
{
    "Laser Sabers": [
        {
            "name": "Blademaster's Shoto",
            "price": "615",
            "color": "blue",
            "bladeCount": "1"
        },
        {
            "name": "Tythian Lightsaber",
            "price": "895",
            "color": "green",
            "bladeCount": "1"
        },
        {
            "name": "Fractured Bogan Lightsaber",
            "price": "790",
            "color": "red",
            "bladeCount": "1"
        },
        {
            "name": "Indomitable Vanquisher's Lightsaber",
            "price": "585",
            "color": "purple",
            "bladeCount": "1"
        },
        {
            "name": "Skorpion TK Dualsaber",
            "price": "1025",
            "color": "blue",
            "bladeCount": "2"
        },
        {
            "name": "Entropic Dualsaber",
            "price": "999",
            "color": "green",
            "bladeCount": "2"
        },
        {
            "name": "Twisted Fang Dualsaber",
            "price": "790",
            "color": "red",
            "bladeCount": "2"
        },
        {
            "name": "Starforged Dualsaber",
            "price": "1256",
            "color": "purple",
            "bladeCount": "2"
        }
    ]
}
```

# Deliverables

The expected deliverable is the URL to the forked stackblitz where
you created your example application.
