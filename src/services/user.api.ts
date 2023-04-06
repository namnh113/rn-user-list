async function getUser() {
  try {
    const user = await fetch(
      'https://random-data-api.com/api/users/random_user?size=10',
    );
    const userJson = await user.json();
    return userJson;
  } catch (error) {
    // handle error
    console.log('#', error);
  }
}

export {getUser};
