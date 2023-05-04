import { expect } from "@playwright/test";
exports.ObjectModel = class ObjectModel
{
    constructor(page){
        this.page = page
    }

    async bookingOne(){
        await this.page.goto('https://www.booking.com/');
        await this.page.getByPlaceholder('Where are you going?').click();
        await this.page.getByPlaceholder('Where are you going?').fill('dubai');
        await this.page.getByRole('button', { name: 'Dubai Dubai Emirate, United Arab Emirates' }).click();
        await this.page.getByRole('button', { name: 'Search' }).click();
        await this.page.getByRole('link', { name: 'Car rentals' }).click();
        await this.page.getByRole('img', { name: 'Yes Rent a Car. logo' }).click();
        await this.page.getByRole('link', { name: 'Airport taxis' }).click();
        await this.page.getByRole('link', { name: 'Attractions' }).click();
        await this.page.getByTestId('search-input-field').click();
        await this.page.getByTestId('search-input-field').fill('something');
        await this.page.goto('https://www.youtube.com/');
        await this.page.getByRole('button', { name: 'Reject the use of cookies and other data for the purposes described' }).click();
        await expect.soft(this.page.getByText('Comedy')).toBeVisible();
        await this.page.getByText('Background music', { exact: true }).click();
        await this.page.getByText('Music', { exact: true }).click();
    }

    async afterAll(){
        await this.page.pause();
        await this.page.goto('https://www.booking.com/');
        await this.page.getByTestId('header-xpb').getByRole('link', { name: 'Flights' }).click();
        await this.page.getByRole('link', { name: 'Car Rentals' }).click();
        await this.page.getByRole('link', { name: 'Attractions' }).click();
        await this.page.getByRole('link', { name: 'Airport taxis' }).click();
        await this.page.getByRole('link', { name: 'Register' }).click();
        await this.page.getByTestId('header-logo').getByRole('link').click();
        await this.page.getByTestId('header-logo').getByRole('link').click();
        await this.page.goto('https://www.booking.com/taxi/index.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ApOZyKIGwAIB0gIkNjQzMmY2ZjAtZTJiMi00ZWQ4LTg3MTAtZmNjMmMyOTkxNGYw2AIF4AIB&sid=2781822f3df475a7b50af40353f374e0');
        await this.page.pause();
        await this.page.close();
    }

    async beforeEach(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.locator('#user-name').click();
        await this.page.locator('#user-name').fill('standard_user');
        await this.page.locator('#user-name').press('Tab');
        await this.page.locator('#password').fill('secret_sauce');
        await this.page.locator('#password').press('Enter');
        if(await this.page.$('#item_4_title_link > div')){
            await this.page.locator('#item_4_title_link > div').click();
        }
    }
}