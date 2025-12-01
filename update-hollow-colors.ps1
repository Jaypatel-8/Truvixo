# Update Services pages to use purple
$servicesFiles = Get-ChildItem -Path "src/app/services" -Filter "page.tsx" -Recurse | Where-Object { $_.FullName -notlike "*[slug]*" -and $_.Name -eq "page.tsx" }
foreach ($file in $servicesFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'hollow-text-(blue|yellow|pink|indigo|orange|teal)', 'hollow-text-purple'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

# Update Hire pages to use yellow
$hireFiles = Get-ChildItem -Path "src/app/hire" -Filter "page.tsx" -Recurse | Where-Object { $_.FullName -notlike "*[slug]*" -and $_.Name -eq "page.tsx" }
foreach ($file in $hireFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'hollow-text-(blue|purple|pink|indigo|orange|teal)', 'hollow-text-yellow'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

# Update Industry pages to use orange
$industryFiles = Get-ChildItem -Path "src/app/industry" -Filter "page.tsx" -Recurse | Where-Object { $_.FullName -notlike "*[slug]*" -and $_.Name -eq "page.tsx" }
foreach ($file in $industryFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'hollow-text-(blue|purple|pink|indigo|yellow|teal)', 'hollow-text-orange'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

# Update Technology pages to use teal
$techFiles = Get-ChildItem -Path "src/app/technology" -Filter "page.tsx" -Recurse
foreach ($file in $techFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'hollow-text-(blue|purple|pink|indigo|yellow|orange)', 'hollow-text-teal'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "All hollow text colors updated!"

