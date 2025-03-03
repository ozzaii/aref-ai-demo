#\!/bin/bash

# Step 1: Configure git
echo "Configuring git..."
git config user.name "Nanominds AI"
git config user.email "omer@nanominds.ai"

# Step 2: Check if repository exists
echo "Checking remote repository..."
if \! git ls-remote --exit-code https://github.com/nanomindsai/nanominds.git &>/dev/null; then
  echo "Repository doesn't exist or you don't have access to it."
  echo "Make sure https://github.com/nanomindsai/nanominds exists and is accessible."
  exit 1
fi

# Step 3: Make sure everything is committed
echo "Committing all changes..."
git add .
git commit -m "Initial commit of Nanominds.ai website" --allow-empty

# Step 4: Push to GitHub
echo "Pushing to GitHub..."
echo "Enter your GitHub username:"
read username
echo "Enter your GitHub Personal Access Token (will not be displayed):"
read -s token

git push https://$username:$token@github.com/nanomindsai/nanominds.git main

# Step 5: Clean up
echo "Cleaning up..."
git remote set-url origin https://github.com/nanomindsai/nanominds.git

echo "Done\! Now configure GitHub Pages at: https://github.com/nanomindsai/nanominds/settings/pages"
echo "- Set Source to 'Deploy from a branch'"
echo "- Select 'main' branch and '/docs' folder"
echo "- Add 'nanominds.ai' as Custom domain"
