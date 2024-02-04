async function fetchUsers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    }

    console.error("Erreur lors de la récupération des utilisateurs");
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchUsers;
