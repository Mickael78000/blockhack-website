#!/bin/bash

# GitHub Repository Cleanup & Professionalization Script
# Usage: ./github-automation.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}ERROR: GITHUB_TOKEN not set${NC}"
    echo "Export your token: export GITHUB_TOKEN='your_token'"
    exit 1
fi

USERNAME="Mickael78000"

echo -e "${GREEN}🚀 Starting GitHub Cleanup...${NC}\n"

# Function to add topics to a repo
add_topics() {
    local repo=$1
    shift
    local topics=("$@")
    
    echo -e "${YELLOW}Adding topics to $repo...${NC}"
    
    # Convert array to JSON
    topics_json=$(printf '%s\n' "${topics[@]}" | jq -R . | jq -s .)
    
    curl -s -X PUT \
        -H "Authorization: Bearer $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.mercy-preview+json" \
        "https://api.github.com/repos/$USERNAME/$repo/topics" \
        -d "{\"names\":$topics_json}" > /dev/null
    
    echo -e "${GREEN}✓ Topics added to $repo${NC}\n"
}

# Function to add description to a repo
add_description() {
    local repo=$1
    local description=$2
    
    echo -e "${YELLOW}Adding description to $repo...${NC}"
    
    curl -s -X PATCH \
        -H "Authorization: Bearer $GITHUB_TOKEN" \
        "https://api.github.com/repos/$USERNAME/$repo" \
        -d "{\"description\":\"$description\"}" > /dev/null
    
    echo -e "${GREEN}✓ Description added to $repo${NC}\n"
}

# Function to archive a repo
archive_repo() {
    local repo=$1
    
    echo -e "${YELLOW}Archiving $repo...${NC}"
    
    curl -s -X PATCH \
        -H "Authorization: Bearer $GITHUB_TOKEN" \
        "https://api.github.com/repos/$USERNAME/$repo" \
        -d '{"archived":true}' > /dev/null
    
    echo -e "${GREEN}✓ Archived $repo${NC}\n"
}

# ============================================================================
# FLAGSHIP REPOS - Add Topics & Descriptions
# ============================================================================

echo -e "${GREEN}📌 Updating Flagship Repos...${NC}\n"

# Umbratrade
add_description "umbratrade" "Decentralized trading platform built on Solana with sub-second execution"
add_topics "umbratrade" "solana" "defi" "trading" "dex" "rust" "typescript" "blockchain" "anchor" "web3"

# Umbratrade Landing Page
add_description "umbratrade-landing-page" "Marketing website for Umbratrade decentralized trading platform"
add_topics "umbratrade-landing-page" "nextjs" "react" "tailwindcss" "landing-page" "web3" "solana"

# DEX Router
add_description "DEX-Router-Solana-V1" "Smart order routing protocol for optimal trade execution across Solana DEXs"
add_topics "DEX-Router-Solana-V1" "solana" "dex" "amm" "defi" "liquidity" "rust" "anchor" "trading" "routing"

# ZK ElGamal Proof
add_description "zk-elgamal-proof" "Zero-Knowledge proof implementation for ElGamal encryption verification"
add_topics "zk-elgamal-proof" "zero-knowledge" "cryptography" "elgamal" "privacy" "zk-proof" "rust" "blockchain"

# Research Token
add_description "research-token" "Token smart contract and protocol implementation on Solana"
add_topics "research-token" "solana" "token" "spl-token" "cryptocurrency" "blockchain" "rust" "anchor"

# Research Token Frontend
add_description "research-token-frontend" "Frontend interface for Research Token ecosystem"
add_topics "research-token-frontend" "react" "typescript" "solana" "web3" "dapp" "frontend"

# Anchor Escrow 2025
add_description "anchor-escrow-2025" "Modern escrow implementation using Anchor framework on Solana"
add_topics "anchor-escrow-2025" "solana" "anchor" "escrow" "smart-contract" "rust" "defi"

# Escrow Solana dApp
add_description "escrow-solana-dapp" "Full-stack escrow application with React frontend and Solana backend"
add_topics "escrow-solana-dapp" "solana" "escrow" "dapp" "react" "typescript" "web3" "anchor"

# ETH Voting dApp
add_description "eth-voting-dapp" "Decentralized voting application on Ethereum with transparent on-chain governance"
add_topics "eth-voting-dapp" "ethereum" "solidity" "voting" "governance" "dapp" "web3" "smart-contract"

# Blockverse Scroll Vision
add_description "blockverse-scroll-vision" "Layer 2 blockchain project built on Scroll zkEVM"
add_topics "blockverse-scroll-vision" "scroll" "layer2" "ethereum" "zk-rollup" "blockchain" "web3"

# Alyrasign
add_description "alyrasign" "Digital signature and verification system for blockchain documents"
add_topics "alyrasign" "blockchain" "digital-signature" "ethereum" "web3" "cryptography"

# Learn Solidity Presentations
add_description "learn-solidity-presentations" "Educational materials and presentations for learning Solidity development"
add_topics "learn-solidity-presentations" "solidity" "ethereum" "education" "tutorial" "smart-contracts" "web3"

echo -e "${GREEN}✓ All flagship repos updated!${NC}\n"

# ============================================================================
# ARCHIVE LEARNING REPOS
# ============================================================================

echo -e "${GREEN}🗄️  Archiving Learning/Exercise Repos...${NC}\n"

repos_to_archive=(
    "Celsius_Fahrenheit"
    "exo_contacts"
    "nth_fib"
    "nth_fib2"
    "minigrep"
    "task3-Mickael78000"
    "task4-Mickael78000"
    "task5-Mickael78000"
    "DouglasDevBC"
    "christmas"
    "Unity3D-Nintentdo_Duck_Hunt"
)

for repo in "${repos_to_archive[@]}"; do
    archive_repo "$repo"
done

echo -e "${GREEN}✓ All learning repos archived!${NC}\n"

# ============================================================================
# SUMMARY
# ============================================================================

echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}🎉 GitHub Cleanup Complete!${NC}"
echo -e "${GREEN}=====================================${NC}\n"

echo -e "✅ Updated descriptions for 12 flagship repos"
echo -e "✅ Added relevant topics/tags to all repos"
echo -e "✅ Archived 11 learning/exercise repos"

echo -e "\n${YELLOW}📋 Next Steps:${NC}"
echo -e "1. Create profile README: https://github.com/new (name it 'Mickael78000')"
echo -e "2. Pin your top 6 repos: https://github.com/Mickael78000?tab=repositories"
echo -e "3. Add README files to flagship projects (templates in ./readme-templates/)"
echo -e "4. Add profile picture and bio to GitHub profile"
echo -e "5. Review private repos to make public (if appropriate)"

echo -e "\n${GREEN}🎯 Recommended Repos to Pin:${NC}"
echo -e "   1. umbratrade"
echo -e "   2. DEX-Router-Solana-V1"
echo -e "   3. zk-elgamal-proof"
echo -e "   4. research-token"
echo -e "   5. anchor-escrow-2025"
echo -e "   6. blockverse-scroll-vision"

echo -e "\n${GREEN}Done! 🚀${NC}\n"
