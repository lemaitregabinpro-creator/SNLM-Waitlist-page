export async function onRequestPost({ request, env }) {
  try {
    // 1. Récupérer les données envoyées par Cal.com
    const data = await request.json();

    // 2. Vérifier que c'est bien une réservation créée (et pas annulée, etc.)
    const triggerEvent = data.triggerEvent; // ex: 'BOOKING_CREATED'
    
    // Log pour voir ce qu'il se passe dans la console Cloudflare
    console.log(`Événement reçu : ${triggerEvent}`);
    console.log('Détails:', JSON.stringify(data.payload, null, 2));

    // --- ICI TU METTRAS TA LOGIQUE PLUS TARD ---
    // Exemple : Envoyer un mail via Resend, une notif Discord, ou sauvegarder en BDD
    // Pour l'instant, on confirme juste la réception.
    
    return new Response(JSON.stringify({ message: "Webhook reçu avec succès" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(`Erreur Webhook: ${err.message}`, { status: 400 });
  }
}