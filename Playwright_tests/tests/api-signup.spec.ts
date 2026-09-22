import { test, expect } from '@playwright/test';



test.describe('Signup API', () => {

  test('should register a new user successfully', async ({ request }) => {
    const email = `api-test-${Date.now()}@gmail.com`;

    const response = await request.post('/api/auth/signup', {
      data: {
        name: 'John',
        lastName: 'Doe',
        email,
        password: 'Qwerty12345',
        repeatPassword: 'Qwerty12345',
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

  expect(body.status).toBe('ok');
  expect(body.data.userId).toBeDefined();
  expect(body.data.photoFilename).toBe('default-user.png');
  expect(body.data.distanceUnits).toBe('km');
  expect(body.data.currency).toBe('usd');



    // cleanup: signup logs the user in via cookies, so the same
    // request context is authorized to delete the account it just created
    const deleteResponse = await request.delete('/api/users');
    expect(deleteResponse.ok()).toBeTruthy();
    

  });

test('should return validation error when email is missing', async ({ request }) => {
  const response = await request.post('/api/auth/signup', {
    data: {
      name: 'John',
      lastName: 'Doe',
      password: 'Qwerty12345',
      repeatPassword: 'Qwerty12345',
    },
  });

  expect(response.status()).toBe(400);

  const body = await response.json();
  expect(body.status).toBe('error');
  expect(body.message).toBe('Email is required');
});

test('should return validation error when passwords do not match', async ({ request }) => {
  const response = await request.post('/api/auth/signup', {
    data: {
      name: 'John',
      lastName: 'Doe',
      email: `api-test-${Date.now()}@gmail.com`,
      password: 'Qwerty12345',
      repeatPassword: 'Qwerty54321',
    },
  });

  expect(response.status()).toBe(400);

  const body = await response.json();
  expect(body.status).toBe('error');
  expect(body.message).toBe('Passwords do not match');
});



});