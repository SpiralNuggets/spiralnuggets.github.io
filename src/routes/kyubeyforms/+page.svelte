<html lang=en>

<head>
    <title>Sis Puella Magica!</title>
</head>

<body>

    <h1 class="text-primary text-4xl font-bold text-center">Sis Puella Magica!</h1>
    <h3 class="text-primary-content text-2xl text-center">GitHub don't take this down! it's my assignment!</h3>

<form class = "pl-10 text-center">
    <label for="name">Full name:</label>
    <input type="text" placeholder="Type Here" id="name" name="name" class="input input-bordered input-primary input-sm"><br>

    <label for="email">Email:</label>
    <input type="email" placeholder="Type Here" id="email" name="email" class="input input-bordered input-primary input-sm"><br>

    <label for="password">Password:</label>
    <input type="password" placeholder="Type Here" id="password" name="password" class="input input-bordered input-primary input-sm"><br>

    <label for="color">Favorite color:</label>
    <select id="color" name="color" class="select select-primary select-sm">
        <option value="red">Red</option>
        <option value="green">Green</option> 
        <option value="blue">Blue</option>
    </select><br>

    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label><br>

    <div style="height: 200px; overflow-y: scroll; border: 1px solid #ccc; padding: 10px; width: 25%; margin: auto;">
        <p>Terms and Conditions</p>

        <p>By clicking "I Agree" below, you agree to forfeit your soul to Kyubey the Incubator. Kyubey will grant you any wish, but in exchange, you must become a Puella Magi and fight witches.</p>

        <p>As a Puella Magi, your soul will be removed from your body and placed into a Soul Gem, which you must keep cleansed and pure. If your Soul Gem becomes too corrupted, you will transform into a witch and be subsequently defeated by another Puella Magi.</p>
    
        <p>You agree to face endless despair and life-threatening battles against powerful witches. Your only rewards will be the ability to make a single wish and a cute magical girl outfit.</p>

        <p>Kyubey may or may not disclose key information that could influence your decision to become a Puella Magi. You cannot back out of your contract once made.</p>

        <p>By agreeing, you consent to having your hopes, dreams, and naive optimism crushed in service of prolonging the inevitable heat death of the universe. So have fun with that.</p>

        <p>Please note that Kyubey may lie, manipulate, and exploit young girls, but somehow believes this is ethical. You acknowledge Kyubey lacks human empathy and emotions.</p>

        <p>In summary, click "I Agree" if you'd like to suffer an existential crisis and help incubators stave off entropy. If you prefer to keep your soul and enjoy a normal, non-magical life, you may choose to close this window and forget you ever saw Kyubey. The choice is yours!</p>
        
    </div>

    <input type="checkbox" id="terms" name="terms">
    <label for="terms">I agree to the terms and conditions</label><br>
    
    <input class="btn btn-primary" type="submit" value="Submit" alt="Nooo don't! Don't trust Kyubey!">
    <!-- How do I link on clicks? I only use Svelte! -->
    </form>


    <footer class="footer justify-center">
        <p>This page was really made by Anucha Cheewachanon.</p>
    </footer>
</body>
</html>