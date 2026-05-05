export async function sendMessage(input: string) {
  await new Promise(res => setTimeout(res, 800));

  const msg = input.toLowerCase();

  // --- PRICING ---
 if (
  msg.includes("price") ||
  msg.includes("pricing") ||
  msg.includes("cost") ||
  msg.includes("plan") ||
  msg.includes("plans") ||
  msg.includes("trial") ||
  msg.includes("free")
) {
  return "We offer flexible pricing plans. You can start with a free trial to explore all features.";
}

  // --- CONTACT ---
  if (msg.includes("contact") || msg.includes("support")) {
    return "You can reach our support team through the contact page. We’re happy to help!";
  }

  // --- GET STARTED ---
  if (msg.includes("start") || msg.includes("signup") || msg.includes("trial")) {
    return "You can click on 'Start Free Trial' at the top right to begin using the platform.";
  }

  // --- PLATFORM INFO ---
  if (msg.includes("what") || msg.includes("platform") || msg.includes("tap master")) {
    return "TapMaster helps businesses boost sales through simple and effective digital marketing campaigns.";
  }

  // --- BENEFITS ---
  if (msg.includes("benefit") || msg.includes("why")) {
    return "It improves engagement, increases conversions, and simplifies marketing workflows.";
  }

  // --- LOGIN / ISSUE ---
  if (msg.includes("login") || msg.includes("issue") || msg.includes("problem")) {
    return "If you're facing issues, try resetting your password or contact support for assistance.";
  }

  // --- DEFAULT ---
  return "I'm here to help! You can ask about pricing, features, getting started, or support.";
}