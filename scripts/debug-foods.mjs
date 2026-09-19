const url = "https://lxpuxwotktquxajljfoo.supabase.co/rest/v1/foods?select=id,name&limit=10";
// Use the secret key if possible, otherwise anon
const key = "sb_publishable_WUx8euyFcUiXVJFij2Z-fw_Nrtk-ZKO";

async function debug() {
  try {
    const res = await fetch(url, {
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`
      }
    });
    const text = await res.text();
    console.log('--- RAW RESPONSE ---');
    console.log(text);
  } catch (err) {
    console.error('Fetch failed:', err);
  }
}

debug();
